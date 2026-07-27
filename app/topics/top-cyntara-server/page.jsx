import TopCyntaraServerKeywordPage, { generateMetadata } from './top-cyntara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCyntaraServerKeywordPage />;
}
