import NewSeasonDemolidoresServerKeywordPage, { generateMetadata } from './new-season-demolidores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonDemolidoresServerKeywordPage />;
}
