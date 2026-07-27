import Tibia74ServerForumKeywordPage, { generateMetadata } from './tibia-7-4-server-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74ServerForumKeywordPage />;
}
