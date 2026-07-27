import CurrentRubinotForumKeywordPage, { generateMetadata } from './current-rubinot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRubinotForumKeywordPage />;
}
