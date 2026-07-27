import PvpeGuideArgentinaKeywordPage, { generateMetadata } from './pvpe-guide-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeGuideArgentinaKeywordPage />;
}
