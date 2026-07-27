import CustomCyntaraLoginKeywordPage, { generateMetadata } from './custom-cyntara-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCyntaraLoginKeywordPage />;
}
