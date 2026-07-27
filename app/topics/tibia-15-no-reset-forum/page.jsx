import Tibia15NoResetForumKeywordPage, { generateMetadata } from './tibia-15-no-reset-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15NoResetForumKeywordPage />;
}
