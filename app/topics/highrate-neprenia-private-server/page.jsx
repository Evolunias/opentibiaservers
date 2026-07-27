import HighrateNepreniaPrivateServerKeywordPage, { generateMetadata } from './highrate-neprenia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNepreniaPrivateServerKeywordPage />;
}
