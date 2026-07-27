import OfficialTibiaraForumKeywordPage, { generateMetadata } from './official-tibiara-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaraForumKeywordPage />;
}
