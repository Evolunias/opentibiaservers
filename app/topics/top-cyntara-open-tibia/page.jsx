import TopCyntaraOpenTibiaKeywordPage, { generateMetadata } from './top-cyntara-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCyntaraOpenTibiaKeywordPage />;
}
