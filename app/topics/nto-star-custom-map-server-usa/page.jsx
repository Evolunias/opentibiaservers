import NtoStarCustomMapServerUsaKeywordPage, { generateMetadata } from './nto-star-custom-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarCustomMapServerUsaKeywordPage />;
}
