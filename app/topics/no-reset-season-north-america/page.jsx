import NoResetSeasonNorthAmericaKeywordPage, { generateMetadata } from './no-reset-season-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSeasonNorthAmericaKeywordPage />;
}
