import CustomNilotForumKeywordPage, { generateMetadata } from './custom-nilot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNilotForumKeywordPage />;
}
