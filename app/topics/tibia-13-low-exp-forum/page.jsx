import Tibia13LowExpForumKeywordPage, { generateMetadata } from './tibia-13-low-exp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13LowExpForumKeywordPage />;
}
