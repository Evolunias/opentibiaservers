import PopularNilotCreateAccountKeywordPage, { generateMetadata } from './popular-nilot-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNilotCreateAccountKeywordPage />;
}
