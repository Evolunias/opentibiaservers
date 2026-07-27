import OlderaBaiakServerUsaKeywordPage, { generateMetadata } from './oldera-baiak-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaBaiakServerUsaKeywordPage />;
}
