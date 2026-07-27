import CurrentAmeriaForumKeywordPage, { generateMetadata } from './current-ameria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAmeriaForumKeywordPage />;
}
