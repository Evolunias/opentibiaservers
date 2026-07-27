import RealMapCoxaotGuideKeywordPage, { generateMetadata } from './real-map-coxaot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCoxaotGuideKeywordPage />;
}
