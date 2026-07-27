import NewSabrehavenForumKeywordPage, { generateMetadata } from './new-sabrehaven-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSabrehavenForumKeywordPage />;
}
