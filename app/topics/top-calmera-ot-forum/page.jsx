import TopCalmeraOtForumKeywordPage, { generateMetadata } from './top-calmera-ot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCalmeraOtForumKeywordPage />;
}
