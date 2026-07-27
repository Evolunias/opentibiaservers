import CustomSerenityForumKeywordPage, { generateMetadata } from './custom-serenity-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSerenityForumKeywordPage />;
}
