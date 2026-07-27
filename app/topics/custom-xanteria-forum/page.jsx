import CustomXanteriaForumKeywordPage, { generateMetadata } from './custom-xanteria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomXanteriaForumKeywordPage />;
}
