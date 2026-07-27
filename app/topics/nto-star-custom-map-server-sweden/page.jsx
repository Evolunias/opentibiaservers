import NtoStarCustomMapServerSwedenKeywordPage, { generateMetadata } from './nto-star-custom-map-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarCustomMapServerSwedenKeywordPage />;
}
