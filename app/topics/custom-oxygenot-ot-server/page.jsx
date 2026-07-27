import CustomOxygenotOtServerKeywordPage, { generateMetadata } from './custom-oxygenot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOxygenotOtServerKeywordPage />;
}
