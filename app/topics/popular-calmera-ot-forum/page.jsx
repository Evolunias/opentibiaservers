import PopularCalmeraOtForumKeywordPage, { generateMetadata } from './popular-calmera-ot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCalmeraOtForumKeywordPage />;
}
