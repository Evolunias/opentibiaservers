import ElderaRetroServerNorthAmericaKeywordPage, { generateMetadata } from './eldera-retro-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaRetroServerNorthAmericaKeywordPage />;
}
