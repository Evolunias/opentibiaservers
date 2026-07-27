import Tibia81NoResetForumKeywordPage, { generateMetadata } from './tibia-8-1-no-reset-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81NoResetForumKeywordPage />;
}
