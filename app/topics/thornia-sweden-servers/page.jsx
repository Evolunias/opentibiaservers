import ThorniaSwedenServersKeywordPage, { generateMetadata } from './thornia-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaSwedenServersKeywordPage />;
}
