import NewCarlinotKeywordPage, { generateMetadata } from './new-carlinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCarlinotKeywordPage />;
}
