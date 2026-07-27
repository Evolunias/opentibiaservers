import CalmeraOtCreateAccountKeywordPage, { generateMetadata } from './calmera-ot-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtCreateAccountKeywordPage />;
}
