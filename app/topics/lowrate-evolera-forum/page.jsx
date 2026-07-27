import LowrateEvoleraForumKeywordPage, { generateMetadata } from './lowrate-evolera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateEvoleraForumKeywordPage />;
}
