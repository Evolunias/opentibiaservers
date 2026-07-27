import TopTibiantisKeywordPage, { generateMetadata } from './top-tibiantis';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiantisKeywordPage />;
}
