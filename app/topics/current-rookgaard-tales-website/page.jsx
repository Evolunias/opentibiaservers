import CurrentRookgaardTalesWebsiteKeywordPage, { generateMetadata } from './current-rookgaard-tales-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRookgaardTalesWebsiteKeywordPage />;
}
