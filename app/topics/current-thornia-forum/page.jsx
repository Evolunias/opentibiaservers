import CurrentThorniaForumKeywordPage, { generateMetadata } from './current-thornia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentThorniaForumKeywordPage />;
}
