import Tibia13RetroForumKeywordPage, { generateMetadata } from './tibia-13-retro-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13RetroForumKeywordPage />;
}
