import PopularTibiantisKeywordPage, { generateMetadata } from './popular-tibiantis';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiantisKeywordPage />;
}
