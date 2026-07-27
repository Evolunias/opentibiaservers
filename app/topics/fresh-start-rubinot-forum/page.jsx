import FreshStartRubinotForumKeywordPage, { generateMetadata } from './fresh-start-rubinot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRubinotForumKeywordPage />;
}
