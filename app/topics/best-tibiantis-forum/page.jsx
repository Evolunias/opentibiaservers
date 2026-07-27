import BestTibiantisForumKeywordPage, { generateMetadata } from './best-tibiantis-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiantisForumKeywordPage />;
}
