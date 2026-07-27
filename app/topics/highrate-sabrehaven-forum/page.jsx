import HighrateSabrehavenForumKeywordPage, { generateMetadata } from './highrate-sabrehaven-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSabrehavenForumKeywordPage />;
}
