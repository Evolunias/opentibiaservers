import ElderaLoginKeywordPage, { generateMetadata } from './eldera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaLoginKeywordPage />;
}
