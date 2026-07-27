import Tibia80EvoForumKeywordPage, { generateMetadata } from './tibia-8-0-evo-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80EvoForumKeywordPage />;
}
