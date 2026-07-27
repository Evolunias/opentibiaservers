import ActiveRookgaardTalesForumKeywordPage, { generateMetadata } from './active-rookgaard-tales-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRookgaardTalesForumKeywordPage />;
}
