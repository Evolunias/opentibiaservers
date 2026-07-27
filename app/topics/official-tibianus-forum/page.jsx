import OfficialTibianusForumKeywordPage, { generateMetadata } from './official-tibianus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibianusForumKeywordPage />;
}
