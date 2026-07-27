import NewSeasonTibiaretroForumKeywordPage, { generateMetadata } from './new-season-tibiaretro-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaretroForumKeywordPage />;
}
