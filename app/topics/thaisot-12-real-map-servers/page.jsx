import Thaisot12RealMapServersKeywordPage, { generateMetadata } from './thaisot-12-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot12RealMapServersKeywordPage />;
}
