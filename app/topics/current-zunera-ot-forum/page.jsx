import CurrentZuneraOtForumKeywordPage, { generateMetadata } from './current-zunera-ot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentZuneraOtForumKeywordPage />;
}
