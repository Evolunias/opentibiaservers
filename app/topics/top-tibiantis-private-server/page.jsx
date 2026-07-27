import TopTibiantisPrivateServerKeywordPage, { generateMetadata } from './top-tibiantis-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiantisPrivateServerKeywordPage />;
}
