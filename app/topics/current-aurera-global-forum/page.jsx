import CurrentAureraGlobalForumKeywordPage, { generateMetadata } from './current-aurera-global-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAureraGlobalForumKeywordPage />;
}
