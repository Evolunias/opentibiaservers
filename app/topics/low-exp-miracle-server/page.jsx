import LowExpMiracleServerKeywordPage, { generateMetadata } from './low-exp-miracle-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpMiracleServerKeywordPage />;
}
