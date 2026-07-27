import TibiaraBaiakServerMexicoKeywordPage, { generateMetadata } from './tibiara-baiak-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraBaiakServerMexicoKeywordPage />;
}
