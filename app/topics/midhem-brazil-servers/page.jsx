import MidhemBrazilServersKeywordPage, { generateMetadata } from './midhem-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemBrazilServersKeywordPage />;
}
