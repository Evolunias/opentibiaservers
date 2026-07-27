import CurrentMiracleOtServerKeywordPage, { generateMetadata } from './current-miracle-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMiracleOtServerKeywordPage />;
}
