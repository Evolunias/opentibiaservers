import TopCyntaraKeywordPage, { generateMetadata } from './top-cyntara';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCyntaraKeywordPage />;
}
