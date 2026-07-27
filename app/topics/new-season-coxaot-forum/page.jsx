import NewSeasonCoxaotForumKeywordPage, { generateMetadata } from './new-season-coxaot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCoxaotForumKeywordPage />;
}
