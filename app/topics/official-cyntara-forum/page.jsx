import OfficialCyntaraForumKeywordPage, { generateMetadata } from './official-cyntara-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCyntaraForumKeywordPage />;
}
