import CurrentBlazeraForumKeywordPage, { generateMetadata } from './current-blazera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentBlazeraForumKeywordPage />;
}
