import PopularTibiantisLoginKeywordPage, { generateMetadata } from './popular-tibiantis-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiantisLoginKeywordPage />;
}
