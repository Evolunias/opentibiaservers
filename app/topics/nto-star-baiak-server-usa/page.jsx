import NtoStarBaiakServerUsaKeywordPage, { generateMetadata } from './nto-star-baiak-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarBaiakServerUsaKeywordPage />;
}
