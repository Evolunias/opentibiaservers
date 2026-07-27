import RealMapSabrehavenWebsiteKeywordPage, { generateMetadata } from './real-map-sabrehaven-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSabrehavenWebsiteKeywordPage />;
}
