import PopularElderaCreateAccountKeywordPage, { generateMetadata } from './popular-eldera-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularElderaCreateAccountKeywordPage />;
}
