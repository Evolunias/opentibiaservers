import NewRubinotOtsKeywordPage, { generateMetadata } from './new-rubinot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRubinotOtsKeywordPage />;
}
