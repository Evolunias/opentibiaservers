import NewTibiascapeKeywordPage, { generateMetadata } from './new-tibiascape';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiascapeKeywordPage />;
}
