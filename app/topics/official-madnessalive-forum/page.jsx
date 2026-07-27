import OfficialMadnessaliveForumKeywordPage, { generateMetadata } from './official-madnessalive-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMadnessaliveForumKeywordPage />;
}
