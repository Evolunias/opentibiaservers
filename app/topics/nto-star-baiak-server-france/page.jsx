import NtoStarBaiakServerFranceKeywordPage, { generateMetadata } from './nto-star-baiak-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarBaiakServerFranceKeywordPage />;
}
