import NewSeasonDemolidoresKeywordPage, { generateMetadata } from './new-season-demolidores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonDemolidoresKeywordPage />;
}
