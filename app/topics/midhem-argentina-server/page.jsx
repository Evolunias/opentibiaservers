import MidhemArgentinaServerKeywordPage, { generateMetadata } from './midhem-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemArgentinaServerKeywordPage />;
}
