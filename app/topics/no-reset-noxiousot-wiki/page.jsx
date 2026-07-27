import NoResetNoxiousotWikiKeywordPage, { generateMetadata } from './no-reset-noxiousot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNoxiousotWikiKeywordPage />;
}
