import Tibia12RetroForumKeywordPage, { generateMetadata } from './tibia-12-retro-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12RetroForumKeywordPage />;
}
