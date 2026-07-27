import ActiveCyntaraClientKeywordPage, { generateMetadata } from './active-cyntara-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCyntaraClientKeywordPage />;
}
