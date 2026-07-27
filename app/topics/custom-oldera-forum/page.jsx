import CustomOlderaForumKeywordPage, { generateMetadata } from './custom-oldera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOlderaForumKeywordPage />;
}
