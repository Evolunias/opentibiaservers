import FreshStartXanteriaForumKeywordPage, { generateMetadata } from './fresh-start-xanteria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartXanteriaForumKeywordPage />;
}
