import NtoStarBaiakServerLatinAmericaKeywordPage, { generateMetadata } from './nto-star-baiak-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarBaiakServerLatinAmericaKeywordPage />;
}
