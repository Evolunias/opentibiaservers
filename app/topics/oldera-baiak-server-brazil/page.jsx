import OlderaBaiakServerBrazilKeywordPage, { generateMetadata } from './oldera-baiak-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaBaiakServerBrazilKeywordPage />;
}
