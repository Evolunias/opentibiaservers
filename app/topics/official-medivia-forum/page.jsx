import OfficialMediviaForumKeywordPage, { generateMetadata } from './official-medivia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMediviaForumKeywordPage />;
}
