import ActiveClassicusForumKeywordPage, { generateMetadata } from './active-classicus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveClassicusForumKeywordPage />;
}
