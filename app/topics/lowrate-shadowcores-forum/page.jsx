import LowrateShadowcoresForumKeywordPage, { generateMetadata } from './lowrate-shadowcores-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateShadowcoresForumKeywordPage />;
}
