import NoResetSeasonGermanyKeywordPage, { generateMetadata } from './no-reset-season-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSeasonGermanyKeywordPage />;
}
