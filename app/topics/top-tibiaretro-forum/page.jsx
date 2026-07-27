import TopTibiaretroForumKeywordPage, { generateMetadata } from './top-tibiaretro-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaretroForumKeywordPage />;
}
