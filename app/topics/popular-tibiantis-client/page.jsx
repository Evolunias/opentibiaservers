import PopularTibiantisClientKeywordPage, { generateMetadata } from './popular-tibiantis-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiantisClientKeywordPage />;
}
