import CustomZuneraOtCreateAccountKeywordPage, { generateMetadata } from './custom-zunera-ot-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomZuneraOtCreateAccountKeywordPage />;
}
