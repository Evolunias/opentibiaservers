import TopCyntaraPrivateServerKeywordPage, { generateMetadata } from './top-cyntara-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCyntaraPrivateServerKeywordPage />;
}
