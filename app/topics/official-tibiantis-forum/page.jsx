import OfficialTibiantisForumKeywordPage, { generateMetadata } from './official-tibiantis-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiantisForumKeywordPage />;
}
