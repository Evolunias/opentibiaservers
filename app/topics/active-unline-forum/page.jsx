import ActiveUnlineForumKeywordPage, { generateMetadata } from './active-unline-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveUnlineForumKeywordPage />;
}
