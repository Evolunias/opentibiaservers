import OfficialRubinotForumKeywordPage, { generateMetadata } from './official-rubinot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRubinotForumKeywordPage />;
}
