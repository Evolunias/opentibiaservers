import TopYurotsOtsKeywordPage, { generateMetadata } from './top-yurots-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopYurotsOtsKeywordPage />;
}
