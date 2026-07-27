import NewSeasonAlasteraOtServerKeywordPage, { generateMetadata } from './new-season-alastera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAlasteraOtServerKeywordPage />;
}
