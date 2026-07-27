import HighrateMiracleServerKeywordPage, { generateMetadata } from './highrate-miracle-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMiracleServerKeywordPage />;
}
