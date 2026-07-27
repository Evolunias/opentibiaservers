import MidhemArgentinaServersKeywordPage, { generateMetadata } from './midhem-argentina-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemArgentinaServersKeywordPage />;
}
