import ElderaChileServerKeywordPage, { generateMetadata } from './eldera-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaChileServerKeywordPage />;
}
