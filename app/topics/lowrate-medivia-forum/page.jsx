import LowrateMediviaForumKeywordPage, { generateMetadata } from './lowrate-medivia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMediviaForumKeywordPage />;
}
