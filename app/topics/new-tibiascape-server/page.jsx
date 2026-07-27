import NewTibiascapeServerKeywordPage, { generateMetadata } from './new-tibiascape-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiascapeServerKeywordPage />;
}
