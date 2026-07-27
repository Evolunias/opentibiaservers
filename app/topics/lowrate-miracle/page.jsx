import LowrateMiracleKeywordPage, { generateMetadata } from './lowrate-miracle';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMiracleKeywordPage />;
}
