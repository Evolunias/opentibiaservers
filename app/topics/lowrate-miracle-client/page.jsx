import LowrateMiracleClientKeywordPage, { generateMetadata } from './lowrate-miracle-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMiracleClientKeywordPage />;
}
