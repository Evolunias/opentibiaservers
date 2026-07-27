import HighrateCyntaraClientKeywordPage, { generateMetadata } from './highrate-cyntara-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCyntaraClientKeywordPage />;
}
