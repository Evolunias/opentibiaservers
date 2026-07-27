import CalmeraOtResetKeywordPage, { generateMetadata } from './calmera-ot-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtResetKeywordPage />;
}
