import HighExpForumCanadaKeywordPage, { generateMetadata } from './high-exp-forum-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpForumCanadaKeywordPage />;
}
