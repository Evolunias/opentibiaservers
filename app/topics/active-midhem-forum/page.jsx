import ActiveMidhemForumKeywordPage, { generateMetadata } from './active-midhem-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMidhemForumKeywordPage />;
}
