import Tibia15EvoForumKeywordPage, { generateMetadata } from './tibia-15-evo-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15EvoForumKeywordPage />;
}
