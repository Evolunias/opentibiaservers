import NewSeasonSabrehavenPrivateServerKeywordPage, { generateMetadata } from './new-season-sabrehaven-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSabrehavenPrivateServerKeywordPage />;
}
