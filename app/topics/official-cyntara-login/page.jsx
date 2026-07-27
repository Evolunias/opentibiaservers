import OfficialCyntaraLoginKeywordPage, { generateMetadata } from './official-cyntara-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCyntaraLoginKeywordPage />;
}
