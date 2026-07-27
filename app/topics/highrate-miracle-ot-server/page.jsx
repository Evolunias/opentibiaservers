import HighrateMiracleOtServerKeywordPage, { generateMetadata } from './highrate-miracle-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMiracleOtServerKeywordPage />;
}
