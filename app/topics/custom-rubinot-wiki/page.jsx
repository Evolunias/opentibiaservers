import CustomRubinotWikiKeywordPage, { generateMetadata } from './custom-rubinot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRubinotWikiKeywordPage />;
}
