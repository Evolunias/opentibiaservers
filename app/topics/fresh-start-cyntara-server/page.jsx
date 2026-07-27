import FreshStartCyntaraServerKeywordPage, { generateMetadata } from './fresh-start-cyntara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCyntaraServerKeywordPage />;
}
