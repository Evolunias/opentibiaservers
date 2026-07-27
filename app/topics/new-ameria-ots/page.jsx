import NewAmeriaOtsKeywordPage, { generateMetadata } from './new-ameria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAmeriaOtsKeywordPage />;
}
