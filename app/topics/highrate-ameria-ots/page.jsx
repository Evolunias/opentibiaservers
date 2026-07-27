import HighrateAmeriaOtsKeywordPage, { generateMetadata } from './highrate-ameria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAmeriaOtsKeywordPage />;
}
