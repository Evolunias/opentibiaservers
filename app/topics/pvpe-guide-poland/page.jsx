import PvpeGuidePolandKeywordPage, { generateMetadata } from './pvpe-guide-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeGuidePolandKeywordPage />;
}
