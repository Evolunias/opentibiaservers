import OlderaBaiakServerMexicoKeywordPage, { generateMetadata } from './oldera-baiak-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaBaiakServerMexicoKeywordPage />;
}
