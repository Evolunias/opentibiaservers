import TopKasteriaOtsKeywordPage, { generateMetadata } from './top-kasteria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopKasteriaOtsKeywordPage />;
}
