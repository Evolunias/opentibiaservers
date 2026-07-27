import CustomOxygenotOtsKeywordPage, { generateMetadata } from './custom-oxygenot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOxygenotOtsKeywordPage />;
}
