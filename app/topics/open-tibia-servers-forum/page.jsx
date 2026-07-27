import OpenTibiaServersForumKeywordPage, { generateMetadata } from './open-tibia-servers-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServersForumKeywordPage />;
}
