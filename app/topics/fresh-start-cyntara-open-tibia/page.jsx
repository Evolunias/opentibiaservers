import FreshStartCyntaraOpenTibiaKeywordPage, { generateMetadata } from './fresh-start-cyntara-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCyntaraOpenTibiaKeywordPage />;
}
