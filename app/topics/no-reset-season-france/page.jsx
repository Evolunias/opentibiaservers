import NoResetSeasonFranceKeywordPage, { generateMetadata } from './no-reset-season-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSeasonFranceKeywordPage />;
}
