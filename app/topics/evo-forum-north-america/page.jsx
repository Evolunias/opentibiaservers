import EvoForumNorthAmericaKeywordPage, { generateMetadata } from './evo-forum-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoForumNorthAmericaKeywordPage />;
}
