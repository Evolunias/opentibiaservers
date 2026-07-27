import CurrentClassickDrakoriaForumKeywordPage, { generateMetadata } from './current-classick-drakoria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentClassickDrakoriaForumKeywordPage />;
}
