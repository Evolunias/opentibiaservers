import CustomMediviaWikiKeywordPage, { generateMetadata } from './custom-medivia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMediviaWikiKeywordPage />;
}
