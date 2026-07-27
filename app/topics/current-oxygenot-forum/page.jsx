import CurrentOxygenotForumKeywordPage, { generateMetadata } from './current-oxygenot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOxygenotForumKeywordPage />;
}
