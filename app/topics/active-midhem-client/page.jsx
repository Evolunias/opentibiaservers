import ActiveMidhemClientKeywordPage, { generateMetadata } from './active-midhem-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMidhemClientKeywordPage />;
}
