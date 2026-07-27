import TopTibijkaOfficialKeywordPage, { generateMetadata } from './top-tibijka-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibijkaOfficialKeywordPage />;
}
