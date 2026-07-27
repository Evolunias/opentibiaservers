import BestThorniaForumKeywordPage, { generateMetadata } from './best-thornia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestThorniaForumKeywordPage />;
}
