import RealMapCoxaotWebsiteKeywordPage, { generateMetadata } from './real-map-coxaot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCoxaotWebsiteKeywordPage />;
}
