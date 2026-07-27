import OfficialMiracleOpenTibiaKeywordPage, { generateMetadata } from './official-miracle-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMiracleOpenTibiaKeywordPage />;
}
