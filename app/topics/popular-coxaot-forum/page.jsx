import PopularCoxaotForumKeywordPage, { generateMetadata } from './popular-coxaot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCoxaotForumKeywordPage />;
}
