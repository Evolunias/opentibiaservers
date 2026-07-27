import CustomNoxiousotWikiKeywordPage, { generateMetadata } from './custom-noxiousot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNoxiousotWikiKeywordPage />;
}
