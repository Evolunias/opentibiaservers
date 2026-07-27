import TopLumineraForumKeywordPage, { generateMetadata } from './top-luminera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopLumineraForumKeywordPage />;
}
