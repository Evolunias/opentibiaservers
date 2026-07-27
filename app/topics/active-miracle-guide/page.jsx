import ActiveMiracleGuideKeywordPage, { generateMetadata } from './active-miracle-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMiracleGuideKeywordPage />;
}
