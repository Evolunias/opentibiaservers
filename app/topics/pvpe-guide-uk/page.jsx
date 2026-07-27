import PvpeGuideUkKeywordPage, { generateMetadata } from './pvpe-guide-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeGuideUkKeywordPage />;
}
