import Tibia84RetroForumKeywordPage, { generateMetadata } from './tibia-8-4-retro-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84RetroForumKeywordPage />;
}
