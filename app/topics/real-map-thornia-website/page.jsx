import RealMapThorniaWebsiteKeywordPage, { generateMetadata } from './real-map-thornia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThorniaWebsiteKeywordPage />;
}
