import RealMapClassicusServerKeywordPage, { generateMetadata } from './real-map-classicus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapClassicusServerKeywordPage />;
}
