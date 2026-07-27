import NtoStarCustomMapServerLatinAmericaKeywordPage, { generateMetadata } from './nto-star-custom-map-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarCustomMapServerLatinAmericaKeywordPage />;
}
