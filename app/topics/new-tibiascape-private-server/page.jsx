import NewTibiascapePrivateServerKeywordPage, { generateMetadata } from './new-tibiascape-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiascapePrivateServerKeywordPage />;
}
