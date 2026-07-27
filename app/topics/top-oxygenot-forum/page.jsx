import TopOxygenotForumKeywordPage, { generateMetadata } from './top-oxygenot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOxygenotForumKeywordPage />;
}
