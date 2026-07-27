import CustomClassicusForumKeywordPage, { generateMetadata } from './custom-classicus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomClassicusForumKeywordPage />;
}
