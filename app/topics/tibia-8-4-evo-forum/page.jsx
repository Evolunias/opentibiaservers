import Tibia84EvoForumKeywordPage, { generateMetadata } from './tibia-8-4-evo-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84EvoForumKeywordPage />;
}
