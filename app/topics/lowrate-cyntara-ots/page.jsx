import LowrateCyntaraOtsKeywordPage, { generateMetadata } from './lowrate-cyntara-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCyntaraOtsKeywordPage />;
}
