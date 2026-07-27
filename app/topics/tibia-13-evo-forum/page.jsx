import Tibia13EvoForumKeywordPage, { generateMetadata } from './tibia-13-evo-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13EvoForumKeywordPage />;
}
