import PopularNepreniaOfficialKeywordPage, { generateMetadata } from './popular-neprenia-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNepreniaOfficialKeywordPage />;
}
