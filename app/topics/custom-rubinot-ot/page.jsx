import CustomRubinotOtKeywordPage, { generateMetadata } from './custom-rubinot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRubinotOtKeywordPage />;
}
