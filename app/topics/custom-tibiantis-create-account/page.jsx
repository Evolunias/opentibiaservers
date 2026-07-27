import CustomTibiantisCreateAccountKeywordPage, { generateMetadata } from './custom-tibiantis-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiantisCreateAccountKeywordPage />;
}
