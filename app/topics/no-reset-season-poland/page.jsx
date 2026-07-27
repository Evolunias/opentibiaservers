import NoResetSeasonPolandKeywordPage, { generateMetadata } from './no-reset-season-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSeasonPolandKeywordPage />;
}
