import PopularOlderaServerKeywordPage, { generateMetadata } from './popular-oldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOlderaServerKeywordPage />;
}
