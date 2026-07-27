import HighrateMistOfDeathForumKeywordPage, { generateMetadata } from './highrate-mist-of-death-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMistOfDeathForumKeywordPage />;
}
