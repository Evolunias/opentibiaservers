import NewOlderaGuideKeywordPage, { generateMetadata } from './new-oldera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOlderaGuideKeywordPage />;
}
