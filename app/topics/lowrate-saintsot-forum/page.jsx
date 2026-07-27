import LowrateSaintsotForumKeywordPage, { generateMetadata } from './lowrate-saintsot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSaintsotForumKeywordPage />;
}
