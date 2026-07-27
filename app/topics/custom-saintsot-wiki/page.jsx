import CustomSaintsotWikiKeywordPage, { generateMetadata } from './custom-saintsot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSaintsotWikiKeywordPage />;
}
