import LowrateImperianicForumKeywordPage, { generateMetadata } from './lowrate-imperianic-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateImperianicForumKeywordPage />;
}
