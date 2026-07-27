import CustomNoxiousotCreateAccountKeywordPage, { generateMetadata } from './custom-noxiousot-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNoxiousotCreateAccountKeywordPage />;
}
