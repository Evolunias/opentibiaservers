import CustomUnlineForumKeywordPage, { generateMetadata } from './custom-unline-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomUnlineForumKeywordPage />;
}
