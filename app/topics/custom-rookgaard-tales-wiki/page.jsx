import CustomRookgaardTalesWikiKeywordPage, { generateMetadata } from './custom-rookgaard-tales-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRookgaardTalesWikiKeywordPage />;
}
