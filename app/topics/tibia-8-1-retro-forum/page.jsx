import Tibia81RetroForumKeywordPage, { generateMetadata } from './tibia-8-1-retro-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81RetroForumKeywordPage />;
}
