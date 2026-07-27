import ActiveCyntaraLoginKeywordPage, { generateMetadata } from './active-cyntara-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCyntaraLoginKeywordPage />;
}
