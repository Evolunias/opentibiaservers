import CurrentMiraclePrivateServerKeywordPage, { generateMetadata } from './current-miracle-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMiraclePrivateServerKeywordPage />;
}
