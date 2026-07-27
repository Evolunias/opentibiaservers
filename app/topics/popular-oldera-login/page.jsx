import PopularOlderaLoginKeywordPage, { generateMetadata } from './popular-oldera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOlderaLoginKeywordPage />;
}
