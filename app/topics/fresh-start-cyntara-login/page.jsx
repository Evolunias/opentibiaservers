import FreshStartCyntaraLoginKeywordPage, { generateMetadata } from './fresh-start-cyntara-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCyntaraLoginKeywordPage />;
}
