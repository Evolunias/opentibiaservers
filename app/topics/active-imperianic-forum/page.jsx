import ActiveImperianicForumKeywordPage, { generateMetadata } from './active-imperianic-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveImperianicForumKeywordPage />;
}
