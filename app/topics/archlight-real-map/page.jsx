import ArchlightRealMapKeywordPage, { generateMetadata } from './archlight-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightRealMapKeywordPage />;
}
