import OfficialMiracleLoginKeywordPage, { generateMetadata } from './official-miracle-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMiracleLoginKeywordPage />;
}
