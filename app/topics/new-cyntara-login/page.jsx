import NewCyntaraLoginKeywordPage, { generateMetadata } from './new-cyntara-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCyntaraLoginKeywordPage />;
}
