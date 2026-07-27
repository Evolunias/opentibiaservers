import LowrateClassicusForumKeywordPage, { generateMetadata } from './lowrate-classicus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateClassicusForumKeywordPage />;
}
