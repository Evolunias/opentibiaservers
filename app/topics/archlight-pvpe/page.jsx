import ArchlightPvpeKeywordPage, { generateMetadata } from './archlight-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightPvpeKeywordPage />;
}
