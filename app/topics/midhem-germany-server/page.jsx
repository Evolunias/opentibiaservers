import MidhemGermanyServerKeywordPage, { generateMetadata } from './midhem-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemGermanyServerKeywordPage />;
}
