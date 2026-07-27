import TopTibiascapeKeywordPage, { generateMetadata } from './top-tibiascape';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiascapeKeywordPage />;
}
