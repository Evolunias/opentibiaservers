import NostaltherRetroServerUkKeywordPage, { generateMetadata } from './nostalther-retro-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherRetroServerUkKeywordPage />;
}
