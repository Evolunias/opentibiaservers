import MidhemGermanyServersKeywordPage, { generateMetadata } from './midhem-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemGermanyServersKeywordPage />;
}
