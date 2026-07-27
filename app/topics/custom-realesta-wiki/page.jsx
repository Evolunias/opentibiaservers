import CustomRealestaWikiKeywordPage, { generateMetadata } from './custom-realesta-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRealestaWikiKeywordPage />;
}
