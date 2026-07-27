import NoResetEternalOdysseyWikiKeywordPage, { generateMetadata } from './no-reset-eternal-odyssey-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetEternalOdysseyWikiKeywordPage />;
}
