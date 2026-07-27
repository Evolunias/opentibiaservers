import OfficialTibiascapeForumKeywordPage, { generateMetadata } from './official-tibiascape-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiascapeForumKeywordPage />;
}
