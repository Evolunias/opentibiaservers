import ElderaEuropeServerKeywordPage, { generateMetadata } from './eldera-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaEuropeServerKeywordPage />;
}
