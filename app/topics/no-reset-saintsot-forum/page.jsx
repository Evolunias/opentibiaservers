import NoResetSaintsotForumKeywordPage, { generateMetadata } from './no-reset-saintsot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSaintsotForumKeywordPage />;
}
