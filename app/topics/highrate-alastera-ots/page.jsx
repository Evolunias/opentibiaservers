import HighrateAlasteraOtsKeywordPage, { generateMetadata } from './highrate-alastera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAlasteraOtsKeywordPage />;
}
