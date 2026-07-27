import TopTibiascapeOtsKeywordPage, { generateMetadata } from './top-tibiascape-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiascapeOtsKeywordPage />;
}
