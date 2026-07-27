import CalmeraOtRealMapKeywordPage, { generateMetadata } from './calmera-ot-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtRealMapKeywordPage />;
}
