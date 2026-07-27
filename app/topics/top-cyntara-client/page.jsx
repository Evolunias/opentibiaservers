import TopCyntaraClientKeywordPage, { generateMetadata } from './top-cyntara-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCyntaraClientKeywordPage />;
}
