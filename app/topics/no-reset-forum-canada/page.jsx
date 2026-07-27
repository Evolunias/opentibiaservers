import NoResetForumCanadaKeywordPage, { generateMetadata } from './no-reset-forum-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetForumCanadaKeywordPage />;
}
