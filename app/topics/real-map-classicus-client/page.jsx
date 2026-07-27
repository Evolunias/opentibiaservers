import RealMapClassicusClientKeywordPage, { generateMetadata } from './real-map-classicus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapClassicusClientKeywordPage />;
}
