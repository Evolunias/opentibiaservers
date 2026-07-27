import TopKasteriaServerKeywordPage, { generateMetadata } from './top-kasteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopKasteriaServerKeywordPage />;
}
