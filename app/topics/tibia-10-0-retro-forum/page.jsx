import Tibia100RetroForumKeywordPage, { generateMetadata } from './tibia-10-0-retro-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100RetroForumKeywordPage />;
}
