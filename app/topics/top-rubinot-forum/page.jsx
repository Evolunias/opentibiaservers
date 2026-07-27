import TopRubinotForumKeywordPage, { generateMetadata } from './top-rubinot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRubinotForumKeywordPage />;
}
