import NewNepreniaPrivateServerKeywordPage, { generateMetadata } from './new-neprenia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNepreniaPrivateServerKeywordPage />;
}
