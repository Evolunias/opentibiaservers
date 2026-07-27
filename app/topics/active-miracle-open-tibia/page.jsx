import ActiveMiracleOpenTibiaKeywordPage, { generateMetadata } from './active-miracle-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMiracleOpenTibiaKeywordPage />;
}
