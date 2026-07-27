import NewOlderaKeywordPage, { generateMetadata } from './new-oldera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOlderaKeywordPage />;
}
