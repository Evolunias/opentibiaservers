import Tibia14EvoForumKeywordPage, { generateMetadata } from './tibia-14-evo-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14EvoForumKeywordPage />;
}
