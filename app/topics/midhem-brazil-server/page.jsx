import MidhemBrazilServerKeywordPage, { generateMetadata } from './midhem-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemBrazilServerKeywordPage />;
}
