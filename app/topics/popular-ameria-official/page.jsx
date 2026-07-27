import PopularAmeriaOfficialKeywordPage, { generateMetadata } from './popular-ameria-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAmeriaOfficialKeywordPage />;
}
