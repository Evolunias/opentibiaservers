import ActiveMidhemOfficialKeywordPage, { generateMetadata } from './active-midhem-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMidhemOfficialKeywordPage />;
}
