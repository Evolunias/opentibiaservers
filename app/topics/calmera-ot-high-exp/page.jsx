import CalmeraOtHighExpKeywordPage, { generateMetadata } from './calmera-ot-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtHighExpKeywordPage />;
}
