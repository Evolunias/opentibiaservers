import RealMapCarlinotWebsiteKeywordPage, { generateMetadata } from './real-map-carlinot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCarlinotWebsiteKeywordPage />;
}
