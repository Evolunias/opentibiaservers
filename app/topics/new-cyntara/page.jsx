import NewCyntaraKeywordPage, { generateMetadata } from './new-cyntara';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCyntaraKeywordPage />;
}
