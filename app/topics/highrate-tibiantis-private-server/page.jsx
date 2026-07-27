import HighrateTibiantisPrivateServerKeywordPage, { generateMetadata } from './highrate-tibiantis-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiantisPrivateServerKeywordPage />;
}
