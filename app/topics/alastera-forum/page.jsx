import AlasteraForumKeywordPage, { generateMetadata } from './alastera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraForumKeywordPage />;
}
