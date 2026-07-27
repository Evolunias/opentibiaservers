import Tibia14RetroForumKeywordPage, { generateMetadata } from './tibia-14-retro-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14RetroForumKeywordPage />;
}
