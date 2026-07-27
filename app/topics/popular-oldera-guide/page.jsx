import PopularOlderaGuideKeywordPage, { generateMetadata } from './popular-oldera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOlderaGuideKeywordPage />;
}
