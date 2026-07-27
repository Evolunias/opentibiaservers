import CustomDemolidoresForumKeywordPage, { generateMetadata } from './custom-demolidores-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomDemolidoresForumKeywordPage />;
}
