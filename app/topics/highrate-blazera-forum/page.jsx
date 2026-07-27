import HighrateBlazeraForumKeywordPage, { generateMetadata } from './highrate-blazera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateBlazeraForumKeywordPage />;
}
