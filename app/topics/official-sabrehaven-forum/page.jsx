import OfficialSabrehavenForumKeywordPage, { generateMetadata } from './official-sabrehaven-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSabrehavenForumKeywordPage />;
}
