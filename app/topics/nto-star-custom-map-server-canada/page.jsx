import NtoStarCustomMapServerCanadaKeywordPage, { generateMetadata } from './nto-star-custom-map-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarCustomMapServerCanadaKeywordPage />;
}
