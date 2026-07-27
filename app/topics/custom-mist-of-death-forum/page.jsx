import CustomMistOfDeathForumKeywordPage, { generateMetadata } from './custom-mist-of-death-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMistOfDeathForumKeywordPage />;
}
