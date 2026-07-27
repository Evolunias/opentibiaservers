import TopTibiantisOfficialKeywordPage, { generateMetadata } from './top-tibiantis-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiantisOfficialKeywordPage />;
}
