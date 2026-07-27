import MidhemPolandServerKeywordPage, { generateMetadata } from './midhem-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemPolandServerKeywordPage />;
}
