import ActiveMidhemServerKeywordPage, { generateMetadata } from './active-midhem-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMidhemServerKeywordPage />;
}
