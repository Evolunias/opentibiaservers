import MidhemStatusKeywordPage, { generateMetadata } from './midhem-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemStatusKeywordPage />;
}
