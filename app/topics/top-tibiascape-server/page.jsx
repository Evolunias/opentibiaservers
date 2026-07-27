import TopTibiascapeServerKeywordPage, { generateMetadata } from './top-tibiascape-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiascapeServerKeywordPage />;
}
