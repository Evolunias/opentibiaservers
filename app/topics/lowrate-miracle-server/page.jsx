import LowrateMiracleServerKeywordPage, { generateMetadata } from './lowrate-miracle-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMiracleServerKeywordPage />;
}
