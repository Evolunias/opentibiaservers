import CustomNtoStarCreateAccountKeywordPage, { generateMetadata } from './custom-nto-star-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNtoStarCreateAccountKeywordPage />;
}
