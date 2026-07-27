import PopularTibiaraCreateAccountKeywordPage, { generateMetadata } from './popular-tibiara-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaraCreateAccountKeywordPage />;
}
