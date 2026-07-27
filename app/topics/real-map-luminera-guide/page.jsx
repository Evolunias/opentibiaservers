import RealMapLumineraGuideKeywordPage, { generateMetadata } from './real-map-luminera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapLumineraGuideKeywordPage />;
}
