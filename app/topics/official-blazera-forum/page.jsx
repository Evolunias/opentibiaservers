import OfficialBlazeraForumKeywordPage, { generateMetadata } from './official-blazera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialBlazeraForumKeywordPage />;
}
