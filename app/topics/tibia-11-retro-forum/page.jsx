import Tibia11RetroForumKeywordPage, { generateMetadata } from './tibia-11-retro-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11RetroForumKeywordPage />;
}
