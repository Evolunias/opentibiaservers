import MidhemEuropeServerKeywordPage, { generateMetadata } from './midhem-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemEuropeServerKeywordPage />;
}
