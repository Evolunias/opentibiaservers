import MidhemMexicoServerKeywordPage, { generateMetadata } from './midhem-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemMexicoServerKeywordPage />;
}
