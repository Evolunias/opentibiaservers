import CustomOxygenotOtKeywordPage, { generateMetadata } from './custom-oxygenot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOxygenotOtKeywordPage />;
}
