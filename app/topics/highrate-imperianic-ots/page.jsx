import HighrateImperianicOtsKeywordPage, { generateMetadata } from './highrate-imperianic-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateImperianicOtsKeywordPage />;
}
