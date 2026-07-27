import WithActivePlayersMiracleServerKeywordPage, { generateMetadata } from './with-active-players-miracle-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersMiracleServerKeywordPage />;
}
