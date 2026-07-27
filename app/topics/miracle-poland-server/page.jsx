import MiraclePolandServerKeywordPage, { generateMetadata } from './miracle-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiraclePolandServerKeywordPage />;
}
