import NoResetSeasonUsaKeywordPage, { generateMetadata } from './no-reset-season-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSeasonUsaKeywordPage />;
}
