import NewSeasonCoxaotPrivateServerKeywordPage, { generateMetadata } from './new-season-coxaot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCoxaotPrivateServerKeywordPage />;
}
