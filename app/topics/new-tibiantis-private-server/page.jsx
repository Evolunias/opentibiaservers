import NewTibiantisPrivateServerKeywordPage, { generateMetadata } from './new-tibiantis-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiantisPrivateServerKeywordPage />;
}
