import CalmeraOtOtKeywordPage, { generateMetadata } from './calmera-ot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtOtKeywordPage />;
}
