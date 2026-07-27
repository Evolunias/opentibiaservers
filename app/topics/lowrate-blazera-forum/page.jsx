import LowrateBlazeraForumKeywordPage, { generateMetadata } from './lowrate-blazera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateBlazeraForumKeywordPage />;
}
