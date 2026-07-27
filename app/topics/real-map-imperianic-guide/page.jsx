import RealMapImperianicGuideKeywordPage, { generateMetadata } from './real-map-imperianic-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapImperianicGuideKeywordPage />;
}
