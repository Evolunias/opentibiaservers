import NoResetHarmoniaOtWikiKeywordPage, { generateMetadata } from './no-reset-harmonia-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetHarmoniaOtWikiKeywordPage />;
}
