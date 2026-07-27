import ActiveMidhemOtsKeywordPage, { generateMetadata } from './active-midhem-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMidhemOtsKeywordPage />;
}
