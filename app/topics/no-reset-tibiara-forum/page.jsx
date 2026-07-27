import NoResetTibiaraForumKeywordPage, { generateMetadata } from './no-reset-tibiara-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiaraForumKeywordPage />;
}
