import FreshStartSabrehavenForumKeywordPage, { generateMetadata } from './fresh-start-sabrehaven-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSabrehavenForumKeywordPage />;
}
