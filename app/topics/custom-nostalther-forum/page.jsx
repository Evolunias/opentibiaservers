import CustomNostaltherForumKeywordPage, { generateMetadata } from './custom-nostalther-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNostaltherForumKeywordPage />;
}
