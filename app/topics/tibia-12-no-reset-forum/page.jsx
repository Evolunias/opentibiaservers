import Tibia12NoResetForumKeywordPage, { generateMetadata } from './tibia-12-no-reset-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12NoResetForumKeywordPage />;
}
