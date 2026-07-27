import MiracleArgentinaServerKeywordPage, { generateMetadata } from './miracle-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleArgentinaServerKeywordPage />;
}
