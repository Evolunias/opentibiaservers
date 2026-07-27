import NoResetSeasonUkKeywordPage, { generateMetadata } from './no-reset-season-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSeasonUkKeywordPage />;
}
