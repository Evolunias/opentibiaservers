import CustomRubinotOtServerKeywordPage, { generateMetadata } from './custom-rubinot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRubinotOtServerKeywordPage />;
}
