import CustomImperianicForumKeywordPage, { generateMetadata } from './custom-imperianic-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomImperianicForumKeywordPage />;
}
