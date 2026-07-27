import TopCanobPrivateServerKeywordPage, { generateMetadata } from './top-canob-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCanobPrivateServerKeywordPage />;
}
