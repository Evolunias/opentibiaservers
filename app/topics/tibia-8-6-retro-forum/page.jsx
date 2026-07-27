import Tibia86RetroForumKeywordPage, { generateMetadata } from './tibia-8-6-retro-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86RetroForumKeywordPage />;
}
