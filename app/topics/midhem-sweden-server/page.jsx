import MidhemSwedenServerKeywordPage, { generateMetadata } from './midhem-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemSwedenServerKeywordPage />;
}
