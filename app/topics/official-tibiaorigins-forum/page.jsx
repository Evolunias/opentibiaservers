import OfficialTibiaoriginsForumKeywordPage, { generateMetadata } from './official-tibiaorigins-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaoriginsForumKeywordPage />;
}
