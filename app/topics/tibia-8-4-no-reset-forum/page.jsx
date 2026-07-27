import Tibia84NoResetForumKeywordPage, { generateMetadata } from './tibia-8-4-no-reset-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84NoResetForumKeywordPage />;
}
