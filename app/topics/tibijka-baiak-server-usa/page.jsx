import TibijkaBaiakServerUsaKeywordPage, { generateMetadata } from './tibijka-baiak-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaBaiakServerUsaKeywordPage />;
}
