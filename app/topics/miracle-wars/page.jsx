import MiracleWarsKeywordPage, { generateMetadata } from './miracle-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleWarsKeywordPage />;
}
