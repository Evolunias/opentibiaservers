import ActiveThorniaForumKeywordPage, { generateMetadata } from './active-thornia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveThorniaForumKeywordPage />;
}
