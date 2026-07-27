import ActiveThaisotForumKeywordPage, { generateMetadata } from './active-thaisot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveThaisotForumKeywordPage />;
}
