import TopAmeriaOtsKeywordPage, { generateMetadata } from './top-ameria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAmeriaOtsKeywordPage />;
}
