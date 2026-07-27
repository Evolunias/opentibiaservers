import HighrateMiracleClientKeywordPage, { generateMetadata } from './highrate-miracle-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMiracleClientKeywordPage />;
}
