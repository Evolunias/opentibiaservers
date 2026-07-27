import CustomCanobForumKeywordPage, { generateMetadata } from './custom-canob-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCanobForumKeywordPage />;
}
