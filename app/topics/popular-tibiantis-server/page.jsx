import PopularTibiantisServerKeywordPage, { generateMetadata } from './popular-tibiantis-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiantisServerKeywordPage />;
}
