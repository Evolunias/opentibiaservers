import NewTibiaraPrivateServerKeywordPage, { generateMetadata } from './new-tibiara-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaraPrivateServerKeywordPage />;
}
