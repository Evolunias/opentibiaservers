import CustomSabrehavenWikiKeywordPage, { generateMetadata } from './custom-sabrehaven-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSabrehavenWikiKeywordPage />;
}
