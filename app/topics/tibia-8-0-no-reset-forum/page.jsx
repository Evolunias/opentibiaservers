import Tibia80NoResetForumKeywordPage, { generateMetadata } from './tibia-8-0-no-reset-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80NoResetForumKeywordPage />;
}
