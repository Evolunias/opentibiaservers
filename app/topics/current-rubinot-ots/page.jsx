import CurrentRubinotOtsKeywordPage, { generateMetadata } from './current-rubinot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRubinotOtsKeywordPage />;
}
