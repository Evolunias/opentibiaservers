import OlderaBaiakServerArgentinaKeywordPage, { generateMetadata } from './oldera-baiak-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaBaiakServerArgentinaKeywordPage />;
}
