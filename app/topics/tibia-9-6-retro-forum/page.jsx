import Tibia96RetroForumKeywordPage, { generateMetadata } from './tibia-9-6-retro-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96RetroForumKeywordPage />;
}
