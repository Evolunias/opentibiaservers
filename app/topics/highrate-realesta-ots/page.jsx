import HighrateRealestaOtsKeywordPage, { generateMetadata } from './highrate-realesta-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRealestaOtsKeywordPage />;
}
