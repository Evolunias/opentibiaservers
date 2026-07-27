import Tibia71EvoForumKeywordPage, { generateMetadata } from './tibia-7-1-evo-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71EvoForumKeywordPage />;
}
