import MidhemChileServersKeywordPage, { generateMetadata } from './midhem-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemChileServersKeywordPage />;
}
