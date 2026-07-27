import CurrentMiracleKeywordPage, { generateMetadata } from './current-miracle';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMiracleKeywordPage />;
}
