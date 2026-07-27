import HighrateXanteriaForumKeywordPage, { generateMetadata } from './highrate-xanteria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateXanteriaForumKeywordPage />;
}
