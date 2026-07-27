import TibiaPrivateServerForumKeywordPage, { generateMetadata } from './tibia-private-server-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaPrivateServerForumKeywordPage />;
}
