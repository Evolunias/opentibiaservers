import OfficialSerenityForumKeywordPage, { generateMetadata } from './official-serenity-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSerenityForumKeywordPage />;
}
