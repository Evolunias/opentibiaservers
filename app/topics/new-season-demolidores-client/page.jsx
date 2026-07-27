import NewSeasonDemolidoresClientKeywordPage, { generateMetadata } from './new-season-demolidores-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonDemolidoresClientKeywordPage />;
}
