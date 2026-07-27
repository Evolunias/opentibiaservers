import OfficialTibiaretroForumKeywordPage, { generateMetadata } from './official-tibiaretro-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaretroForumKeywordPage />;
}
