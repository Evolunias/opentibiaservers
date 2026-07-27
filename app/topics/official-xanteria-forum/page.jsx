import OfficialXanteriaForumKeywordPage, { generateMetadata } from './official-xanteria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialXanteriaForumKeywordPage />;
}
