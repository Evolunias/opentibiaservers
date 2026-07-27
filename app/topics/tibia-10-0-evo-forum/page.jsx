import Tibia100EvoForumKeywordPage, { generateMetadata } from './tibia-10-0-evo-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100EvoForumKeywordPage />;
}
