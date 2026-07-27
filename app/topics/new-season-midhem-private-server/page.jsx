import NewSeasonMidhemPrivateServerKeywordPage, { generateMetadata } from './new-season-midhem-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMidhemPrivateServerKeywordPage />;
}
