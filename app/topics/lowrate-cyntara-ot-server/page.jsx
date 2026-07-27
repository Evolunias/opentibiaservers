import LowrateCyntaraOtServerKeywordPage, { generateMetadata } from './lowrate-cyntara-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCyntaraOtServerKeywordPage />;
}
