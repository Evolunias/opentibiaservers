import NewTibiaretroForumKeywordPage, { generateMetadata } from './new-tibiaretro-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaretroForumKeywordPage />;
}
