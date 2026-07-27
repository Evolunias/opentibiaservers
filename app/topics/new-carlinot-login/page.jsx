import NewCarlinotLoginKeywordPage, { generateMetadata } from './new-carlinot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCarlinotLoginKeywordPage />;
}
