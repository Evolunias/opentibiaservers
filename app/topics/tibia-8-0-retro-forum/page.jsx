import Tibia80RetroForumKeywordPage, { generateMetadata } from './tibia-8-0-retro-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80RetroForumKeywordPage />;
}
