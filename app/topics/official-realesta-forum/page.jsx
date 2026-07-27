import OfficialRealestaForumKeywordPage, { generateMetadata } from './official-realesta-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRealestaForumKeywordPage />;
}
