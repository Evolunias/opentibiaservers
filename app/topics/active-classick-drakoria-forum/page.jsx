import ActiveClassickDrakoriaForumKeywordPage, { generateMetadata } from './active-classick-drakoria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveClassickDrakoriaForumKeywordPage />;
}
