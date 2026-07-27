import Tibia13NoResetForumKeywordPage, { generateMetadata } from './tibia-13-no-reset-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13NoResetForumKeywordPage />;
}
