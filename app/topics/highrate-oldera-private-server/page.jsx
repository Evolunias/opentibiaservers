import HighrateOlderaPrivateServerKeywordPage, { generateMetadata } from './highrate-oldera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOlderaPrivateServerKeywordPage />;
}
