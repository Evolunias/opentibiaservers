import FreshStartTibiascapePrivateServerKeywordPage, { generateMetadata } from './fresh-start-tibiascape-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiascapePrivateServerKeywordPage />;
}
