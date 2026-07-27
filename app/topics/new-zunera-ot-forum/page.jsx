import NewZuneraOtForumKeywordPage, { generateMetadata } from './new-zunera-ot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewZuneraOtForumKeywordPage />;
}
