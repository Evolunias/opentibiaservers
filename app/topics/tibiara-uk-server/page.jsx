import TibiaraUkServerKeywordPage, { generateMetadata } from './tibiara-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraUkServerKeywordPage />;
}
