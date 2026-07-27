import TopTibiascapeOtKeywordPage, { generateMetadata } from './top-tibiascape-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiascapeOtKeywordPage />;
}
