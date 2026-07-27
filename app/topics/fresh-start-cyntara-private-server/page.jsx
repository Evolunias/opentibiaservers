import FreshStartCyntaraPrivateServerKeywordPage, { generateMetadata } from './fresh-start-cyntara-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCyntaraPrivateServerKeywordPage />;
}
