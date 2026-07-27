import Tibia74RetroForumKeywordPage, { generateMetadata } from './tibia-7-4-retro-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74RetroForumKeywordPage />;
}
