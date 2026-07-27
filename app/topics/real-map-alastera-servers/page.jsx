import RealMapAlasteraServersKeywordPage, { generateMetadata } from './real-map-alastera-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapAlasteraServersKeywordPage />;
}
