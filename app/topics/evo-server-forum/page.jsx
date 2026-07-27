import EvoServerForumKeywordPage, { generateMetadata } from './evo-server-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServerForumKeywordPage />;
}
