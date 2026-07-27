import TopTibiantisOtsKeywordPage, { generateMetadata } from './top-tibiantis-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiantisOtsKeywordPage />;
}
