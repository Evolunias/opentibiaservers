import ActiveCyntaraServerKeywordPage, { generateMetadata } from './active-cyntara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCyntaraServerKeywordPage />;
}
