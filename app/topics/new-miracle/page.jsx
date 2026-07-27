import NewMiracleKeywordPage, { generateMetadata } from './new-miracle';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMiracleKeywordPage />;
}
