import NoResetBlazeraForumKeywordPage, { generateMetadata } from './no-reset-blazera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetBlazeraForumKeywordPage />;
}
