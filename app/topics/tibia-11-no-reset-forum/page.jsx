import Tibia11NoResetForumKeywordPage, { generateMetadata } from './tibia-11-no-reset-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11NoResetForumKeywordPage />;
}
