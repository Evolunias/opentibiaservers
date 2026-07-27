import NostaltherRetroServerUsaKeywordPage, { generateMetadata } from './nostalther-retro-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherRetroServerUsaKeywordPage />;
}
