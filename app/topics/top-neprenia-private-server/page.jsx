import TopNepreniaPrivateServerKeywordPage, { generateMetadata } from './top-neprenia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNepreniaPrivateServerKeywordPage />;
}
