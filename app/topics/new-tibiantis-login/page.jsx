import NewTibiantisLoginKeywordPage, { generateMetadata } from './new-tibiantis-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiantisLoginKeywordPage />;
}
