import TibijkaBaiakServerUkKeywordPage, { generateMetadata } from './tibijka-baiak-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaBaiakServerUkKeywordPage />;
}
