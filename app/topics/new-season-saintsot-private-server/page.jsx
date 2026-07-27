import NewSeasonSaintsotPrivateServerKeywordPage, { generateMetadata } from './new-season-saintsot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSaintsotPrivateServerKeywordPage />;
}
