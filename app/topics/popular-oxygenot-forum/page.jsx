import PopularOxygenotForumKeywordPage, { generateMetadata } from './popular-oxygenot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOxygenotForumKeywordPage />;
}
