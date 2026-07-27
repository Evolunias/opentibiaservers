import CalmeraOtOfficialKeywordPage, { generateMetadata } from './calmera-ot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtOfficialKeywordPage />;
}
