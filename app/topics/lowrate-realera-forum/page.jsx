import LowrateRealeraForumKeywordPage, { generateMetadata } from './lowrate-realera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRealeraForumKeywordPage />;
}
