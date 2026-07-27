import NewMiracleClientKeywordPage, { generateMetadata } from './new-miracle-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMiracleClientKeywordPage />;
}
