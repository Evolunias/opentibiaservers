import NewSeasonAlasteraClientKeywordPage, { generateMetadata } from './new-season-alastera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAlasteraClientKeywordPage />;
}
