import NoResetElderaForumKeywordPage, { generateMetadata } from './no-reset-eldera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetElderaForumKeywordPage />;
}
