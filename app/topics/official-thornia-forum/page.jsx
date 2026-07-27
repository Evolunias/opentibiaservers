import OfficialThorniaForumKeywordPage, { generateMetadata } from './official-thornia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialThorniaForumKeywordPage />;
}
