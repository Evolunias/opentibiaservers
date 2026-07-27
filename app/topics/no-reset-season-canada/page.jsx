import NoResetSeasonCanadaKeywordPage, { generateMetadata } from './no-reset-season-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSeasonCanadaKeywordPage />;
}
