import OfficialDemolidoresForumKeywordPage, { generateMetadata } from './official-demolidores-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialDemolidoresForumKeywordPage />;
}
