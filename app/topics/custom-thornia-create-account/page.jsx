import CustomThorniaCreateAccountKeywordPage, { generateMetadata } from './custom-thornia-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomThorniaCreateAccountKeywordPage />;
}
