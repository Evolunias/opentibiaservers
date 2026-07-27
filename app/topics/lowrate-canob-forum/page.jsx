import LowrateCanobForumKeywordPage, { generateMetadata } from './lowrate-canob-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCanobForumKeywordPage />;
}
