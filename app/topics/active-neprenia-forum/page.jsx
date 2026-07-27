import ActiveNepreniaForumKeywordPage, { generateMetadata } from './active-neprenia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNepreniaForumKeywordPage />;
}
