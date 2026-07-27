import OfficialAmeriaForumKeywordPage, { generateMetadata } from './official-ameria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialAmeriaForumKeywordPage />;
}
