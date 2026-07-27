import HighrateCyntaraLoginKeywordPage, { generateMetadata } from './highrate-cyntara-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCyntaraLoginKeywordPage />;
}
