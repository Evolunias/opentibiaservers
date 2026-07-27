import PopularImperianicOfficialKeywordPage, { generateMetadata } from './popular-imperianic-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularImperianicOfficialKeywordPage />;
}
