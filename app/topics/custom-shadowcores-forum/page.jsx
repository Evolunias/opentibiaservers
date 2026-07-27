import CustomShadowcoresForumKeywordPage, { generateMetadata } from './custom-shadowcores-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomShadowcoresForumKeywordPage />;
}
