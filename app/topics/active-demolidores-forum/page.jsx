import ActiveDemolidoresForumKeywordPage, { generateMetadata } from './active-demolidores-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveDemolidoresForumKeywordPage />;
}
