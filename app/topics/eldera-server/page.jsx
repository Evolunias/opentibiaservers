import ElderaServerKeywordPage, { generateMetadata } from './eldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaServerKeywordPage />;
}
