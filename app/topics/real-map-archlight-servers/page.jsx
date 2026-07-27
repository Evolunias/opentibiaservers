import RealMapArchlightServersKeywordPage, { generateMetadata } from './real-map-archlight-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapArchlightServersKeywordPage />;
}
