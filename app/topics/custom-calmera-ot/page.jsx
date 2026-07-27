import CustomCalmeraOtKeywordPage, { generateMetadata } from './custom-calmera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCalmeraOtKeywordPage />;
}
