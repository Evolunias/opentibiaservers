import TibiaraMexicoServerKeywordPage, { generateMetadata } from './tibiara-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraMexicoServerKeywordPage />;
}
