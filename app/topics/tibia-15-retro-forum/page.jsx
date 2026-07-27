import Tibia15RetroForumKeywordPage, { generateMetadata } from './tibia-15-retro-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15RetroForumKeywordPage />;
}
