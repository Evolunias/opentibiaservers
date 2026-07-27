import CurrentAlasteraForumKeywordPage, { generateMetadata } from './current-alastera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAlasteraForumKeywordPage />;
}
