import TopCyntaraOtsKeywordPage, { generateMetadata } from './top-cyntara-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCyntaraOtsKeywordPage />;
}
