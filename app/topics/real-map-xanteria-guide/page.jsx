import RealMapXanteriaGuideKeywordPage, { generateMetadata } from './real-map-xanteria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapXanteriaGuideKeywordPage />;
}
