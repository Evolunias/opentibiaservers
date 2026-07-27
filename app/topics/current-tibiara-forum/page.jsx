import CurrentTibiaraForumKeywordPage, { generateMetadata } from './current-tibiara-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaraForumKeywordPage />;
}
