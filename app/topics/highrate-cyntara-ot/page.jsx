import HighrateCyntaraOtKeywordPage, { generateMetadata } from './highrate-cyntara-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCyntaraOtKeywordPage />;
}
