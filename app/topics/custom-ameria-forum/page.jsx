import CustomAmeriaForumKeywordPage, { generateMetadata } from './custom-ameria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomAmeriaForumKeywordPage />;
}
