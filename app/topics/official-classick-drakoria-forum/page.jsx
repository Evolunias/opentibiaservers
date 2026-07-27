import OfficialClassickDrakoriaForumKeywordPage, { generateMetadata } from './official-classick-drakoria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialClassickDrakoriaForumKeywordPage />;
}
