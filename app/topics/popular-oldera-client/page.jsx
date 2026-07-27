import PopularOlderaClientKeywordPage, { generateMetadata } from './popular-oldera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOlderaClientKeywordPage />;
}
