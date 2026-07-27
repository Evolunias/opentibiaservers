import Tibia14NoResetForumKeywordPage, { generateMetadata } from './tibia-14-no-reset-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14NoResetForumKeywordPage />;
}
