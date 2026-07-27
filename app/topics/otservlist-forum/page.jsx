import OtservlistForumKeywordPage, { generateMetadata } from './otservlist-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistForumKeywordPage />;
}
