import ThorniaBaiakServerEuropeKeywordPage, { generateMetadata } from './thornia-baiak-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaBaiakServerEuropeKeywordPage />;
}
