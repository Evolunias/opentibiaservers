import Tibia12LowExpForumKeywordPage, { generateMetadata } from './tibia-12-low-exp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12LowExpForumKeywordPage />;
}
