import Tibia12EvoForumKeywordPage, { generateMetadata } from './tibia-12-evo-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12EvoForumKeywordPage />;
}
