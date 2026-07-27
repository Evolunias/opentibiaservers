import LowrateNilotForumKeywordPage, { generateMetadata } from './lowrate-nilot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNilotForumKeywordPage />;
}
