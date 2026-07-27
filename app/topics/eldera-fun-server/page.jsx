import ElderaFunServerKeywordPage, { generateMetadata } from './eldera-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaFunServerKeywordPage />;
}
