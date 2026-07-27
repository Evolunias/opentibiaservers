import NewRealestaPrivateServerKeywordPage, { generateMetadata } from './new-realesta-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRealestaPrivateServerKeywordPage />;
}
