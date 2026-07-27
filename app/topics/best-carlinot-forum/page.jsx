import BestCarlinotForumKeywordPage, { generateMetadata } from './best-carlinot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCarlinotForumKeywordPage />;
}
