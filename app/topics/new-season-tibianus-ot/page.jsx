import NewSeasonTibianusOtKeywordPage, { generateMetadata } from './new-season-tibianus-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibianusOtKeywordPage />;
}
