import PopularTibiascapeKeywordPage, { generateMetadata } from './popular-tibiascape';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiascapeKeywordPage />;
}
