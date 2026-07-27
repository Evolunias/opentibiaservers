import LowrateArchlightForumKeywordPage, { generateMetadata } from './lowrate-archlight-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateArchlightForumKeywordPage />;
}
