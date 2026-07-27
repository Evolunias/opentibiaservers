import NewYurotsOtsKeywordPage, { generateMetadata } from './new-yurots-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewYurotsOtsKeywordPage />;
}
