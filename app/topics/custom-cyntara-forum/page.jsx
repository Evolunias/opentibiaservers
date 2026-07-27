import CustomCyntaraForumKeywordPage, { generateMetadata } from './custom-cyntara-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCyntaraForumKeywordPage />;
}
