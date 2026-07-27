import CustomRookgaardTalesWebsiteKeywordPage, { generateMetadata } from './custom-rookgaard-tales-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRookgaardTalesWebsiteKeywordPage />;
}
