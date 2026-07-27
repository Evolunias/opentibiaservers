import CustomCalmeraOtOtsKeywordPage, { generateMetadata } from './custom-calmera-ot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCalmeraOtOtsKeywordPage />;
}
