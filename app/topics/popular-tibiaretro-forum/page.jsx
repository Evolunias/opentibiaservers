import PopularTibiaretroForumKeywordPage, { generateMetadata } from './popular-tibiaretro-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaretroForumKeywordPage />;
}
