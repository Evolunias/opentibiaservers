import ActiveCalmeraOtForumKeywordPage, { generateMetadata } from './active-calmera-ot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCalmeraOtForumKeywordPage />;
}
