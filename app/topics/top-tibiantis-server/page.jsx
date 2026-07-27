import TopTibiantisServerKeywordPage, { generateMetadata } from './top-tibiantis-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiantisServerKeywordPage />;
}
