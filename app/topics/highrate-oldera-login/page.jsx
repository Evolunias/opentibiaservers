import HighrateOlderaLoginKeywordPage, { generateMetadata } from './highrate-oldera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOlderaLoginKeywordPage />;
}
