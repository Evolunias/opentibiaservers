import Thaisot13RealMapServersKeywordPage, { generateMetadata } from './thaisot-13-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot13RealMapServersKeywordPage />;
}
