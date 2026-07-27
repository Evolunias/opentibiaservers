import OfficialLumineraForumKeywordPage, { generateMetadata } from './official-luminera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialLumineraForumKeywordPage />;
}
