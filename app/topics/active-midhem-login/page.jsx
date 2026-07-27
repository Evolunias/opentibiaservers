import ActiveMidhemLoginKeywordPage, { generateMetadata } from './active-midhem-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMidhemLoginKeywordPage />;
}
