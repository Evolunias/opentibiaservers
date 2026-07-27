import ElderaRetroServerUkKeywordPage, { generateMetadata } from './eldera-retro-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaRetroServerUkKeywordPage />;
}
