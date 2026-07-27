import PopularCyntaraOpenTibiaKeywordPage, { generateMetadata } from './popular-cyntara-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCyntaraOpenTibiaKeywordPage />;
}
