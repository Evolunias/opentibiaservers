import Tibia81LowExpForumKeywordPage, { generateMetadata } from './tibia-8-1-low-exp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81LowExpForumKeywordPage />;
}
