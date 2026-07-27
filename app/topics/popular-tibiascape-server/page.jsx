import PopularTibiascapeServerKeywordPage, { generateMetadata } from './popular-tibiascape-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiascapeServerKeywordPage />;
}
