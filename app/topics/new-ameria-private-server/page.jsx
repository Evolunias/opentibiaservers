import NewAmeriaPrivateServerKeywordPage, { generateMetadata } from './new-ameria-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAmeriaPrivateServerKeywordPage />;
}
