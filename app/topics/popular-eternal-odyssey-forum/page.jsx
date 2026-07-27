import PopularEternalOdysseyForumKeywordPage, { generateMetadata } from './popular-eternal-odyssey-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEternalOdysseyForumKeywordPage />;
}
