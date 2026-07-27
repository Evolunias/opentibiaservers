import OfficialMiracleKeywordPage, { generateMetadata } from './official-miracle';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMiracleKeywordPage />;
}
