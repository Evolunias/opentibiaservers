import NoResetCyntaraLoginKeywordPage, { generateMetadata } from './no-reset-cyntara-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCyntaraLoginKeywordPage />;
}
