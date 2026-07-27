import CalmeraOtOtsKeywordPage, { generateMetadata } from './calmera-ot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtOtsKeywordPage />;
}
