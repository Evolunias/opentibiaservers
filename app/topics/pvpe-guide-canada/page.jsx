import PvpeGuideCanadaKeywordPage, { generateMetadata } from './pvpe-guide-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeGuideCanadaKeywordPage />;
}
