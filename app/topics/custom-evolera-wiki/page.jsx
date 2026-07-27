import CustomEvoleraWikiKeywordPage, { generateMetadata } from './custom-evolera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEvoleraWikiKeywordPage />;
}
