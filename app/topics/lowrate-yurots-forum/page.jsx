import LowrateYurotsForumKeywordPage, { generateMetadata } from './lowrate-yurots-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateYurotsForumKeywordPage />;
}
