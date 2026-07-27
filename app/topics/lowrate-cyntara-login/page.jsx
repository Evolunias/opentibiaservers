import LowrateCyntaraLoginKeywordPage, { generateMetadata } from './lowrate-cyntara-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCyntaraLoginKeywordPage />;
}
