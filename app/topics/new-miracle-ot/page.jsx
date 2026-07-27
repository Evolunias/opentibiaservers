import NewMiracleOtKeywordPage, { generateMetadata } from './new-miracle-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMiracleOtKeywordPage />;
}
