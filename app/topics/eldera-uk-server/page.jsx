import ElderaUkServerKeywordPage, { generateMetadata } from './eldera-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaUkServerKeywordPage />;
}
