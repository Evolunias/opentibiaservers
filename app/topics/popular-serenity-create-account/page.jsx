import PopularSerenityCreateAccountKeywordPage, { generateMetadata } from './popular-serenity-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSerenityCreateAccountKeywordPage />;
}
