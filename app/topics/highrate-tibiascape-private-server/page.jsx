import HighrateTibiascapePrivateServerKeywordPage, { generateMetadata } from './highrate-tibiascape-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiascapePrivateServerKeywordPage />;
}
