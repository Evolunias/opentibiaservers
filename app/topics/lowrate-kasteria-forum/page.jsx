import LowrateKasteriaForumKeywordPage, { generateMetadata } from './lowrate-kasteria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateKasteriaForumKeywordPage />;
}
