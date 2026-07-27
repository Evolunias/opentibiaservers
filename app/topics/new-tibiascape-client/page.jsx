import NewTibiascapeClientKeywordPage, { generateMetadata } from './new-tibiascape-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiascapeClientKeywordPage />;
}
