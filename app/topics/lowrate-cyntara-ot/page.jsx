import LowrateCyntaraOtKeywordPage, { generateMetadata } from './lowrate-cyntara-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCyntaraOtKeywordPage />;
}
