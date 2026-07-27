import NewSeasonAlasteraServerKeywordPage, { generateMetadata } from './new-season-alastera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAlasteraServerKeywordPage />;
}
