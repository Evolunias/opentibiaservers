import NepreniaForumKeywordPage, { generateMetadata } from './neprenia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaForumKeywordPage />;
}
