import CurrentCyntaraLoginKeywordPage, { generateMetadata } from './current-cyntara-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCyntaraLoginKeywordPage />;
}
