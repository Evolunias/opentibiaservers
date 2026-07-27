import NostaltherRetroServerArgentinaKeywordPage, { generateMetadata } from './nostalther-retro-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherRetroServerArgentinaKeywordPage />;
}
