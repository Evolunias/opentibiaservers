import RealMapXanteriaWebsiteKeywordPage, { generateMetadata } from './real-map-xanteria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapXanteriaWebsiteKeywordPage />;
}
