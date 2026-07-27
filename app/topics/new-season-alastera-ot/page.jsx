import NewSeasonAlasteraOtKeywordPage, { generateMetadata } from './new-season-alastera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAlasteraOtKeywordPage />;
}
