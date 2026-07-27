import LowrateOxygenotForumKeywordPage, { generateMetadata } from './lowrate-oxygenot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOxygenotForumKeywordPage />;
}
