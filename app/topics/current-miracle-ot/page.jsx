import CurrentMiracleOtKeywordPage, { generateMetadata } from './current-miracle-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMiracleOtKeywordPage />;
}
