import TopMidhemKeywordPage, { generateMetadata } from './top-midhem';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMidhemKeywordPage />;
}
