import TibiascapePrivateServerKeywordPage, { generateMetadata } from './tibiascape-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapePrivateServerKeywordPage />;
}
