import LowrateNepreniaForumKeywordPage, { generateMetadata } from './lowrate-neprenia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNepreniaForumKeywordPage />;
}
