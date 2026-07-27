import Tibia84LowExpForumKeywordPage, { generateMetadata } from './tibia-8-4-low-exp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84LowExpForumKeywordPage />;
}
