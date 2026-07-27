import CurrentElderaForumKeywordPage, { generateMetadata } from './current-eldera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentElderaForumKeywordPage />;
}
