import TopAmeriaPrivateServerKeywordPage, { generateMetadata } from './top-ameria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAmeriaPrivateServerKeywordPage />;
}
