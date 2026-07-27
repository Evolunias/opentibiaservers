import NewCarlinotServerKeywordPage, { generateMetadata } from './new-carlinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCarlinotServerKeywordPage />;
}
