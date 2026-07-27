import LowrateOlderaServerKeywordPage, { generateMetadata } from './lowrate-oldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOlderaServerKeywordPage />;
}
