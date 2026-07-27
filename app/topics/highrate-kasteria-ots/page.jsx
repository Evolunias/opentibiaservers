import HighrateKasteriaOtsKeywordPage, { generateMetadata } from './highrate-kasteria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateKasteriaOtsKeywordPage />;
}
