import HighrateYurotsOtsKeywordPage, { generateMetadata } from './highrate-yurots-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateYurotsOtsKeywordPage />;
}
