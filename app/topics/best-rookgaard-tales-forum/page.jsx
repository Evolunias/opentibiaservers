import BestRookgaardTalesForumKeywordPage, { generateMetadata } from './best-rookgaard-tales-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRookgaardTalesForumKeywordPage />;
}
