import OfficialShadowcoresForumKeywordPage, { generateMetadata } from './official-shadowcores-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialShadowcoresForumKeywordPage />;
}
