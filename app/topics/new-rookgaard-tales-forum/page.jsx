import NewRookgaardTalesForumKeywordPage, { generateMetadata } from './new-rookgaard-tales-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRookgaardTalesForumKeywordPage />;
}
