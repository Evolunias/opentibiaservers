import CurrentTibiantisForumKeywordPage, { generateMetadata } from './current-tibiantis-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiantisForumKeywordPage />;
}
