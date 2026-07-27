import OfficialCyntaraGuideKeywordPage, { generateMetadata } from './official-cyntara-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCyntaraGuideKeywordPage />;
}
