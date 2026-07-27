import ThorniaBaiakServerCanadaKeywordPage, { generateMetadata } from './thornia-baiak-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaBaiakServerCanadaKeywordPage />;
}
