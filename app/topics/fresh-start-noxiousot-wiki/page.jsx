import FreshStartNoxiousotWikiKeywordPage, { generateMetadata } from './fresh-start-noxiousot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNoxiousotWikiKeywordPage />;
}
