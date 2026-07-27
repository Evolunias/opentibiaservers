import TopTibijkaPrivateServerKeywordPage, { generateMetadata } from './top-tibijka-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibijkaPrivateServerKeywordPage />;
}
