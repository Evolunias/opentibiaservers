import TopKasteriaPrivateServerKeywordPage, { generateMetadata } from './top-kasteria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopKasteriaPrivateServerKeywordPage />;
}
