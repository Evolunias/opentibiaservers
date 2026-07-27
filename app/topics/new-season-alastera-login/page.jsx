import NewSeasonAlasteraLoginKeywordPage, { generateMetadata } from './new-season-alastera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAlasteraLoginKeywordPage />;
}
