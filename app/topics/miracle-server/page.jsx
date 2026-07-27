import MiracleServerKeywordPage, { generateMetadata } from './miracle-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleServerKeywordPage />;
}
