import BestTibiaretroForumKeywordPage, { generateMetadata } from './best-tibiaretro-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaretroForumKeywordPage />;
}
