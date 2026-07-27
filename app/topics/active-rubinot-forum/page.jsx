import ActiveRubinotForumKeywordPage, { generateMetadata } from './active-rubinot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRubinotForumKeywordPage />;
}
