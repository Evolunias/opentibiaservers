import CustomClassicusWikiKeywordPage, { generateMetadata } from './custom-classicus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomClassicusWikiKeywordPage />;
}
