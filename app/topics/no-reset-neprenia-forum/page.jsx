import NoResetNepreniaForumKeywordPage, { generateMetadata } from './no-reset-neprenia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNepreniaForumKeywordPage />;
}
