import HighrateMediviaForumKeywordPage, { generateMetadata } from './highrate-medivia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMediviaForumKeywordPage />;
}
