import ActiveTibiaretroForumKeywordPage, { generateMetadata } from './active-tibiaretro-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaretroForumKeywordPage />;
}
