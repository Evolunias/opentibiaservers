import WithActivePlayersTibiascapeServerKeywordPage, { generateMetadata } from './with-active-players-tibiascape-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersTibiascapeServerKeywordPage />;
}
