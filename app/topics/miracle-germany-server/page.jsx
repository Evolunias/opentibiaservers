import MiracleGermanyServerKeywordPage, { generateMetadata } from './miracle-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleGermanyServerKeywordPage />;
}
