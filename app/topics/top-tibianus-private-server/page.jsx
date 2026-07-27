import TopTibianusPrivateServerKeywordPage, { generateMetadata } from './top-tibianus-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibianusPrivateServerKeywordPage />;
}
