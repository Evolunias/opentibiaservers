import LowrateRookgaardTalesWebsiteKeywordPage, { generateMetadata } from './lowrate-rookgaard-tales-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRookgaardTalesWebsiteKeywordPage />;
}
