import Tibia80LowExpForumKeywordPage, { generateMetadata } from './tibia-8-0-low-exp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80LowExpForumKeywordPage />;
}
