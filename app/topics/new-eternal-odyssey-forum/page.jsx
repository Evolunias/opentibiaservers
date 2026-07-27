import NewEternalOdysseyForumKeywordPage, { generateMetadata } from './new-eternal-odyssey-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEternalOdysseyForumKeywordPage />;
}
