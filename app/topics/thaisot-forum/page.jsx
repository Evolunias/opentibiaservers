import ThaisotForumKeywordPage, { generateMetadata } from './thaisot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotForumKeywordPage />;
}
