import Tibia86LowExpForumKeywordPage, { generateMetadata } from './tibia-8-6-low-exp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86LowExpForumKeywordPage />;
}
