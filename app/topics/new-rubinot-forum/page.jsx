import NewRubinotForumKeywordPage, { generateMetadata } from './new-rubinot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRubinotForumKeywordPage />;
}
