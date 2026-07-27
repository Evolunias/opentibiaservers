import NewSeasonTibianusOtServerKeywordPage, { generateMetadata } from './new-season-tibianus-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibianusOtServerKeywordPage />;
}
