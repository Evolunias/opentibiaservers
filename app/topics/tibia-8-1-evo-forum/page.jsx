import Tibia81EvoForumKeywordPage, { generateMetadata } from './tibia-8-1-evo-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81EvoForumKeywordPage />;
}
