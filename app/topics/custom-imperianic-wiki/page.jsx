import CustomImperianicWikiKeywordPage, { generateMetadata } from './custom-imperianic-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomImperianicWikiKeywordPage />;
}
