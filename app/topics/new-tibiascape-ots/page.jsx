import NewTibiascapeOtsKeywordPage, { generateMetadata } from './new-tibiascape-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiascapeOtsKeywordPage />;
}
