import NewSeasonCyntaraPrivateServerKeywordPage, { generateMetadata } from './new-season-cyntara-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCyntaraPrivateServerKeywordPage />;
}
