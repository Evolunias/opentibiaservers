import Tibia11EvoForumKeywordPage, { generateMetadata } from './tibia-11-evo-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11EvoForumKeywordPage />;
}
