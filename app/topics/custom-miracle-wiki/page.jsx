import CustomMiracleWikiKeywordPage, { generateMetadata } from './custom-miracle-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMiracleWikiKeywordPage />;
}
