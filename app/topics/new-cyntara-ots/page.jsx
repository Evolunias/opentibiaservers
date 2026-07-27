import NewCyntaraOtsKeywordPage, { generateMetadata } from './new-cyntara-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCyntaraOtsKeywordPage />;
}
