import NewCyntaraPrivateServerKeywordPage, { generateMetadata } from './new-cyntara-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCyntaraPrivateServerKeywordPage />;
}
