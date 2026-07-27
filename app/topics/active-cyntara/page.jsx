import ActiveCyntaraKeywordPage, { generateMetadata } from './active-cyntara';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCyntaraKeywordPage />;
}
