import RealMapYurotsGuideKeywordPage, { generateMetadata } from './real-map-yurots-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapYurotsGuideKeywordPage />;
}
