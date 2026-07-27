import HighExpForumFranceKeywordPage, { generateMetadata } from './high-exp-forum-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpForumFranceKeywordPage />;
}
