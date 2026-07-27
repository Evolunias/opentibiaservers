import LowrateOlderaPrivateServerKeywordPage, { generateMetadata } from './lowrate-oldera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOlderaPrivateServerKeywordPage />;
}
