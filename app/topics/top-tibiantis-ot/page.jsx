import TopTibiantisOtKeywordPage, { generateMetadata } from './top-tibiantis-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiantisOtKeywordPage />;
}
