import NewCoxaotForumKeywordPage, { generateMetadata } from './new-coxaot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCoxaotForumKeywordPage />;
}
