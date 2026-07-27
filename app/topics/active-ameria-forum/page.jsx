import ActiveAmeriaForumKeywordPage, { generateMetadata } from './active-ameria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAmeriaForumKeywordPage />;
}
