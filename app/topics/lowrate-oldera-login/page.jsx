import LowrateOlderaLoginKeywordPage, { generateMetadata } from './lowrate-oldera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOlderaLoginKeywordPage />;
}
