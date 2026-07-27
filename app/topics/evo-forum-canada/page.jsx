import EvoForumCanadaKeywordPage, { generateMetadata } from './evo-forum-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoForumCanadaKeywordPage />;
}
