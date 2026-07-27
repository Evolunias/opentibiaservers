import PopularCyntaraLoginKeywordPage, { generateMetadata } from './popular-cyntara-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCyntaraLoginKeywordPage />;
}
