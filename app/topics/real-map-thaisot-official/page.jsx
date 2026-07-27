import RealMapThaisotOfficialKeywordPage, { generateMetadata } from './real-map-thaisot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThaisotOfficialKeywordPage />;
}
