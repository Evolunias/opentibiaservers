import LowrateMiracleOtServerKeywordPage, { generateMetadata } from './lowrate-miracle-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMiracleOtServerKeywordPage />;
}
