import CurrentImperianicForumKeywordPage, { generateMetadata } from './current-imperianic-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentImperianicForumKeywordPage />;
}
