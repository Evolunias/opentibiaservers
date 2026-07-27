import PopularBlazeraCreateAccountKeywordPage, { generateMetadata } from './popular-blazera-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularBlazeraCreateAccountKeywordPage />;
}
