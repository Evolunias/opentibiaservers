import Tibia96LowExpForumKeywordPage, { generateMetadata } from './tibia-9-6-low-exp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96LowExpForumKeywordPage />;
}
