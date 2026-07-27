import Tibia14LowExpForumKeywordPage, { generateMetadata } from './tibia-14-low-exp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14LowExpForumKeywordPage />;
}
