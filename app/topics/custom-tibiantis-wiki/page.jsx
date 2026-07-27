import CustomTibiantisWikiKeywordPage, { generateMetadata } from './custom-tibiantis-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiantisWikiKeywordPage />;
}
