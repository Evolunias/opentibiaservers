import PopularLumineraForumKeywordPage, { generateMetadata } from './popular-luminera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularLumineraForumKeywordPage />;
}
