import CustomInfernalOtCreateAccountKeywordPage, { generateMetadata } from './custom-infernal-ot-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomInfernalOtCreateAccountKeywordPage />;
}
