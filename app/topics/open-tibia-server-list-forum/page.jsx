import OpenTibiaServerListForumKeywordPage, { generateMetadata } from './open-tibia-server-list-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServerListForumKeywordPage />;
}
