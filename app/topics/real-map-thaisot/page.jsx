import RealMapThaisotKeywordPage, { generateMetadata } from './real-map-thaisot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThaisotKeywordPage />;
}
