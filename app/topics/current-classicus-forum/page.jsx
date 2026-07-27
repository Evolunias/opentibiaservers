import CurrentClassicusForumKeywordPage, { generateMetadata } from './current-classicus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentClassicusForumKeywordPage />;
}
