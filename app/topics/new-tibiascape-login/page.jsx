import NewTibiascapeLoginKeywordPage, { generateMetadata } from './new-tibiascape-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiascapeLoginKeywordPage />;
}
