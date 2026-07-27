import PopularOlderaOfficialKeywordPage, { generateMetadata } from './popular-oldera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOlderaOfficialKeywordPage />;
}
