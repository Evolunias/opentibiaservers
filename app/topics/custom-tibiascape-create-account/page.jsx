import CustomTibiascapeCreateAccountKeywordPage, { generateMetadata } from './custom-tibiascape-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiascapeCreateAccountKeywordPage />;
}
