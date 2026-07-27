import NoResetSeasonEuropeKeywordPage, { generateMetadata } from './no-reset-season-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSeasonEuropeKeywordPage />;
}
