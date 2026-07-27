import NoResetShadowcoresForumKeywordPage, { generateMetadata } from './no-reset-shadowcores-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetShadowcoresForumKeywordPage />;
}
