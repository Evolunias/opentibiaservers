import RealMapCarlinotServersKeywordPage, { generateMetadata } from './real-map-carlinot-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCarlinotServersKeywordPage />;
}
