import HighrateElderaOtsKeywordPage, { generateMetadata } from './highrate-eldera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateElderaOtsKeywordPage />;
}
