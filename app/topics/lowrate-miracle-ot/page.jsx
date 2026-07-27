import LowrateMiracleOtKeywordPage, { generateMetadata } from './lowrate-miracle-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMiracleOtKeywordPage />;
}
