import PopularAlasteraOfficialKeywordPage, { generateMetadata } from './popular-alastera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAlasteraOfficialKeywordPage />;
}
