import LowrateTibiascapePrivateServerKeywordPage, { generateMetadata } from './lowrate-tibiascape-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiascapePrivateServerKeywordPage />;
}
