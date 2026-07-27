import ActiveXanteriaForumKeywordPage, { generateMetadata } from './active-xanteria-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveXanteriaForumKeywordPage />;
}
