import NewSeasonAlasteraKeywordPage, { generateMetadata } from './new-season-alastera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAlasteraKeywordPage />;
}
