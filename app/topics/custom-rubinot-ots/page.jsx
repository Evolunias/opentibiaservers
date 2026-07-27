import CustomRubinotOtsKeywordPage, { generateMetadata } from './custom-rubinot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRubinotOtsKeywordPage />;
}
