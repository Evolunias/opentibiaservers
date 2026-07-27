import Tibia71RetroForumKeywordPage, { generateMetadata } from './tibia-7-1-retro-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71RetroForumKeywordPage />;
}
