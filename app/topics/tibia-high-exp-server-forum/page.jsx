import TibiaHighExpServerForumKeywordPage, { generateMetadata } from './tibia-high-exp-server-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaHighExpServerForumKeywordPage />;
}
