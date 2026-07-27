import HighrateTibiaretroForumKeywordPage, { generateMetadata } from './highrate-tibiaretro-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiaretroForumKeywordPage />;
}
