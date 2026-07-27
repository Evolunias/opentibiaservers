import ElderaGermanyServerKeywordPage, { generateMetadata } from './eldera-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaGermanyServerKeywordPage />;
}
