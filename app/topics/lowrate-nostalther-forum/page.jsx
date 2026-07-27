import LowrateNostaltherForumKeywordPage, { generateMetadata } from './lowrate-nostalther-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNostaltherForumKeywordPage />;
}
