import LowrateCyntaraOpenTibiaKeywordPage, { generateMetadata } from './lowrate-cyntara-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCyntaraOpenTibiaKeywordPage />;
}
