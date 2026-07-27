import CurrentMiracleServerKeywordPage, { generateMetadata } from './current-miracle-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMiracleServerKeywordPage />;
}
