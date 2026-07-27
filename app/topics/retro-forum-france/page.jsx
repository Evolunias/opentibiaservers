import RetroForumFranceKeywordPage, { generateMetadata } from './retro-forum-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroForumFranceKeywordPage />;
}
