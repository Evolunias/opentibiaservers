import NewOxygenotOtsKeywordPage, { generateMetadata } from './new-oxygenot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOxygenotOtsKeywordPage />;
}
