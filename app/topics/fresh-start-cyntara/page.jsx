import FreshStartCyntaraKeywordPage, { generateMetadata } from './fresh-start-cyntara';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCyntaraKeywordPage />;
}
