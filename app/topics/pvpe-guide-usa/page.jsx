import PvpeGuideUsaKeywordPage, { generateMetadata } from './pvpe-guide-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeGuideUsaKeywordPage />;
}
