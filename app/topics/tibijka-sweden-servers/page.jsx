import TibijkaSwedenServersKeywordPage, { generateMetadata } from './tibijka-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaSwedenServersKeywordPage />;
}
