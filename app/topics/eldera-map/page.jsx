import ElderaMapKeywordPage, { generateMetadata } from './eldera-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaMapKeywordPage />;
}
