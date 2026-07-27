import ElderaRealMapKeywordPage, { generateMetadata } from './eldera-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaRealMapKeywordPage />;
}
