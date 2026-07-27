import BestInfernalOtWikiKeywordPage, { generateMetadata } from './best-infernal-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestInfernalOtWikiKeywordPage />;
}
