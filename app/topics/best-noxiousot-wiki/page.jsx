import BestNoxiousotWikiKeywordPage, { generateMetadata } from './best-noxiousot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNoxiousotWikiKeywordPage />;
}
