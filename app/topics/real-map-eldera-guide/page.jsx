import RealMapElderaGuideKeywordPage, { generateMetadata } from './real-map-eldera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapElderaGuideKeywordPage />;
}
