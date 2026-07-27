import TopCoxaotForumKeywordPage, { generateMetadata } from './top-coxaot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCoxaotForumKeywordPage />;
}
