import ActiveLumineraForumKeywordPage, { generateMetadata } from './active-luminera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveLumineraForumKeywordPage />;
}
