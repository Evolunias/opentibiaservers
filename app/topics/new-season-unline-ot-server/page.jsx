import NewSeasonUnlineOtServerKeywordPage, { generateMetadata } from './new-season-unline-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonUnlineOtServerKeywordPage />;
}
