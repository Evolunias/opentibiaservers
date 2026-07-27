import Tibia71LowExpForumKeywordPage, { generateMetadata } from './tibia-7-1-low-exp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71LowExpForumKeywordPage />;
}
