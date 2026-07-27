import NoResetCyntaraForumKeywordPage, { generateMetadata } from './no-reset-cyntara-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCyntaraForumKeywordPage />;
}
