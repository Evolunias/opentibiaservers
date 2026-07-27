import ActiveMidhemKeywordPage, { generateMetadata } from './active-midhem';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMidhemKeywordPage />;
}
