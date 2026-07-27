import HighrateArchlightPrivateServerKeywordPage, { generateMetadata } from './highrate-archlight-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateArchlightPrivateServerKeywordPage />;
}
