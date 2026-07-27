import CurrentSaintsotForumKeywordPage, { generateMetadata } from './current-saintsot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSaintsotForumKeywordPage />;
}
