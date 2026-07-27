import CustomRookgaardTalesForumKeywordPage, { generateMetadata } from './custom-rookgaard-tales-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRookgaardTalesForumKeywordPage />;
}
