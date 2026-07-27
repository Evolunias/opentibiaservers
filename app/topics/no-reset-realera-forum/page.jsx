import NoResetRealeraForumKeywordPage, { generateMetadata } from './no-reset-realera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRealeraForumKeywordPage />;
}
