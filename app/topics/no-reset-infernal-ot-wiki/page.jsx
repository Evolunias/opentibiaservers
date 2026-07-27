import NoResetInfernalOtWikiKeywordPage, { generateMetadata } from './no-reset-infernal-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetInfernalOtWikiKeywordPage />;
}
