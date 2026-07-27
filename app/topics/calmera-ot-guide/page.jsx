import CalmeraOtGuideKeywordPage, { generateMetadata } from './calmera-ot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtGuideKeywordPage />;
}
