import PopularSabrehavenForumKeywordPage, { generateMetadata } from './popular-sabrehaven-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSabrehavenForumKeywordPage />;
}
