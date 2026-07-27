import ElderaRetroServerArgentinaKeywordPage, { generateMetadata } from './eldera-retro-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaRetroServerArgentinaKeywordPage />;
}
