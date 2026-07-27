import CustomCalmeraOtLoginKeywordPage, { generateMetadata } from './custom-calmera-ot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCalmeraOtLoginKeywordPage />;
}
