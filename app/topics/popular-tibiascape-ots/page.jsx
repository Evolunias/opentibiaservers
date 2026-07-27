import PopularTibiascapeOtsKeywordPage, { generateMetadata } from './popular-tibiascape-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiascapeOtsKeywordPage />;
}
