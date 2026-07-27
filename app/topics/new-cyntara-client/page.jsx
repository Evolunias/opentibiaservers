import NewCyntaraClientKeywordPage, { generateMetadata } from './new-cyntara-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCyntaraClientKeywordPage />;
}
