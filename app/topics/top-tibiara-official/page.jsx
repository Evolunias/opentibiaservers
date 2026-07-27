import TopTibiaraOfficialKeywordPage, { generateMetadata } from './top-tibiara-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaraOfficialKeywordPage />;
}
