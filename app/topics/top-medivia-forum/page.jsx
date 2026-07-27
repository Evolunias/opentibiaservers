import TopMediviaForumKeywordPage, { generateMetadata } from './top-medivia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMediviaForumKeywordPage />;
}
