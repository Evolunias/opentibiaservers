import HighrateMiracleKeywordPage, { generateMetadata } from './highrate-miracle';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMiracleKeywordPage />;
}
