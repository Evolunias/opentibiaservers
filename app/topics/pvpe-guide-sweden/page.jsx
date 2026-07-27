import PvpeGuideSwedenKeywordPage, { generateMetadata } from './pvpe-guide-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeGuideSwedenKeywordPage />;
}
