import Tibia11LowExpForumKeywordPage, { generateMetadata } from './tibia-11-low-exp-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11LowExpForumKeywordPage />;
}
