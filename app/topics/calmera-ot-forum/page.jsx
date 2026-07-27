import CalmeraOtForumKeywordPage, { generateMetadata } from './calmera-ot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtForumKeywordPage />;
}
