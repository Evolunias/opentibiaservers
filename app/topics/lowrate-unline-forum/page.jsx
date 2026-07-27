import LowrateUnlineForumKeywordPage, { generateMetadata } from './lowrate-unline-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateUnlineForumKeywordPage />;
}
