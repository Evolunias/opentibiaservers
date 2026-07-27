import RealMapThaisotLoginKeywordPage, { generateMetadata } from './real-map-thaisot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThaisotLoginKeywordPage />;
}
