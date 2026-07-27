import TibijkaBaiakServerArgentinaKeywordPage, { generateMetadata } from './tibijka-baiak-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaBaiakServerArgentinaKeywordPage />;
}
