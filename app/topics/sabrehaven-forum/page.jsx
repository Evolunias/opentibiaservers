import SabrehavenForumKeywordPage, { generateMetadata } from './sabrehaven-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenForumKeywordPage />;
}
