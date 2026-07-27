import CurrentSabrehavenForumKeywordPage, { generateMetadata } from './current-sabrehaven-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSabrehavenForumKeywordPage />;
}
