import OfficialRealeraForumKeywordPage, { generateMetadata } from './official-realera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRealeraForumKeywordPage />;
}
