import ActiveMadnessaliveForumKeywordPage, { generateMetadata } from './active-madnessalive-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMadnessaliveForumKeywordPage />;
}
