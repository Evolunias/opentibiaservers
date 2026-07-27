import FreshStartCyntaraClientKeywordPage, { generateMetadata } from './fresh-start-cyntara-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCyntaraClientKeywordPage />;
}
