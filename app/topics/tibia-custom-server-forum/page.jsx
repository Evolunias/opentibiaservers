import TibiaCustomServerForumKeywordPage, { generateMetadata } from './tibia-custom-server-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaCustomServerForumKeywordPage />;
}
