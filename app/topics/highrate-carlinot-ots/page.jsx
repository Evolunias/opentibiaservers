import HighrateCarlinotOtsKeywordPage, { generateMetadata } from './highrate-carlinot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCarlinotOtsKeywordPage />;
}
