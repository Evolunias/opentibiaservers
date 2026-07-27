import ActiveTibiaraForumKeywordPage, { generateMetadata } from './active-tibiara-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaraForumKeywordPage />;
}
