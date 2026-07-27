import CustomTibijkaWikiKeywordPage, { generateMetadata } from './custom-tibijka-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibijkaWikiKeywordPage />;
}
