import TopXanteriaForumKeywordPage, { generateMetadata } from './top-xanteria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopXanteriaForumKeywordPage />;
}
