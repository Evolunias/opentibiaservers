import HighrateOlderaOtsKeywordPage, { generateMetadata } from './highrate-oldera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOlderaOtsKeywordPage />;
}
