import CustomTrashformersCreateAccountKeywordPage, { generateMetadata } from './custom-trashformers-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTrashformersCreateAccountKeywordPage />;
}
