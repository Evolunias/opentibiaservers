import ActiveTibianusForumKeywordPage, { generateMetadata } from './active-tibianus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibianusForumKeywordPage />;
}
