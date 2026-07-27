import ActiveBlazeraForumKeywordPage, { generateMetadata } from './active-blazera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveBlazeraForumKeywordPage />;
}
