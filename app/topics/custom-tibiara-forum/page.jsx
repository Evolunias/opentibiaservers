import CustomTibiaraForumKeywordPage, { generateMetadata } from './custom-tibiara-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaraForumKeywordPage />;
}
