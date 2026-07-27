import NewCyntaraServerKeywordPage, { generateMetadata } from './new-cyntara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCyntaraServerKeywordPage />;
}
