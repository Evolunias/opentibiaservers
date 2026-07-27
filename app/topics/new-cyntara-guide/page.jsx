import NewCyntaraGuideKeywordPage, { generateMetadata } from './new-cyntara-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCyntaraGuideKeywordPage />;
}
