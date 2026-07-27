import CurrentMiracleLoginKeywordPage, { generateMetadata } from './current-miracle-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMiracleLoginKeywordPage />;
}
