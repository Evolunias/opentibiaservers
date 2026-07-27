import PopularRubinotForumKeywordPage, { generateMetadata } from './popular-rubinot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRubinotForumKeywordPage />;
}
