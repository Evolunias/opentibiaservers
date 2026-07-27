import CustomElderaCreateAccountKeywordPage, { generateMetadata } from './custom-eldera-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomElderaCreateAccountKeywordPage />;
}
