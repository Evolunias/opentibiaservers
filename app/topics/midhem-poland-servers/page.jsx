import MidhemPolandServersKeywordPage, { generateMetadata } from './midhem-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemPolandServersKeywordPage />;
}
